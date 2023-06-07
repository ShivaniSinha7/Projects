#include <iostream>
#include <string>
#include <dirent.h>
#include<stdlib.h>
#include<fcntl.h>
#include<vector>
#include<unistd.h>
#include<termios.h>
#include<bits/stdc++.h>
#include <sys/stat.h>
#include<sys/ioctl.h>
#include<sys/types.h>
#include<pwd.h>
#include<fcntl.h>
#include<fstream>
#include<grp.h>
#include<ctime>

#define clr printf("\033[H\033[J");
#define clrLine printf("\033[K");
#define MAX 10                      //Max no. of items displayed on screen

using namespace std;

//Global variables
struct termios initial;   
struct winsize w;
vector<char*> temp;
const char* dirname;
char cd[1024];
size_t cdsize=1024;

vector<string> commandString;

stack<string> prevStack;
stack<string> forwardStack;

string currentdir = "";

int row;
int col;
int cursor = 1;
int top = 0;
int bottom = MAX;
int Ccursor = 20;

string pathhome;

//move cursor
void moveCur(int x, int y)
{
    cout<<"\033["<<x<<";"<<y<<"H";
    fflush(stdout);
}

int min(int a, int b)
{
    if(a<b)
        return a;

    else
        return b;
}

string substring(string str)
{
    int n = str.length();
    int i = n-1;
    int index = 0;
    
    while(i>=0)
    {
        if(str[i] == '/')
        {
            index = i;
            break;
        }
        i--;
    }
   string r = str.substr(0,i);
   return r;
}

void DisableRawMode() 
{
	tcsetattr(STDIN_FILENO, TCSAFLUSH, &initial);
}

void EnableRawMode()
{
    tcgetattr(STDIN_FILENO, &initial);
    atexit(DisableRawMode);
    struct termios raw = initial;
    raw.c_lflag &= ~(ECHO | ICANON);
    tcsetattr(STDIN_FILENO, TCSAFLUSH, &raw);
}

int windowSize()
{
    ioctl(STDOUT_FILENO,TIOCGWINSZ,&w);
    row = w.ws_row - 2;
    col = w.ws_col;

    return row;
}

bool compare(char *c1, char *c2)
{
    return strcmp(c1, c2) < 0;
}

void printStatus(string str)
{
    moveCur(18,6);
    cout<<"Status : "<<str;
    moveCur(windowSize()-8,Ccursor);
}

void printNormal()
{     
    moveCur(windowSize()-10,0);

    cout<<"*****************************NORMAL MODE*******************************";

    moveCur(1,0);
}

void printCommand()
{
    moveCur(windowSize()-8,0);
    cout<<"Enter Commands --> ";
   
    moveCur(windowSize()-10,0);
    cout<<"****************** COMMAND MODE *********************"<<endl;
    moveCur(windowSize()-8,Ccursor);
}

void printDetails(const char* filename, const char* dirname)
{
    string dpath = "";
    dpath = string(dirname) + "/" + string(filename);

    char* path = new char[dpath.length() + 1];

    strcpy(path, dpath.c_str());

    struct stat s1;
    stat(path, &s1);
 
    int size = s1.st_size;
    if(size >= 1024)
    {
        cout<<"\t"<<size/1024<<" KB"<<"\t";
    }
    else
    {
        cout<<"\t"<<size<<" B"<<"\t";
    }

    if(S_ISDIR(s1.st_mode))
        cout<<"d";
    else
        cout<<"-";

    cout<<((s1.st_mode & S_IRUSR) ? "r" : "-");
    cout<<((s1.st_mode & S_IWUSR) ? "w" : "-");
    cout<<((s1.st_mode & S_IXUSR) ? "x" : "-");
    cout<<((s1.st_mode & S_IRGRP) ? "r" : "-");
    cout<<((s1.st_mode & S_IWUSR) ? "w" : "-");
    cout<<((s1.st_mode & S_IXGRP) ? "x" : "-");
    cout<<((s1.st_mode & S_IROTH) ? "r" : "-");
    cout<<((s1.st_mode & S_IWOTH) ? "w" : "-");
    cout<<((s1.st_mode & S_IXOTH) ? "x" : "-");

    char Time[100];   
    strftime(Time, 100, "%d-%m-%y %H:%M:%S", localtime(&s1.st_mtime));
    cout<<"\t"<<Time;

    struct passwd *psw = getpwuid(s1.st_uid);
    struct group *grp = getgrgid(s1.st_gid);
    cout<<setw(8)<<right<<psw->pw_name;
    cout<<setw(8)<<right<<grp->gr_name;

    return ;
}

void ListFile(const char* dirname)
{
    clr;
    DIR* dir = opendir(dirname);

    if(dir == NULL)
        return ;

    struct dirent* entity;
    struct stat s1;
    temp.clear();
    entity = readdir(dir);
    while (entity != NULL) 
    {
        temp.push_back(entity->d_name);
        entity = readdir(dir);
    }

    sort(temp.begin(), temp.end(), compare);
    
    for(int i=top; i<temp.size() && i<bottom;i++)
    {
        cout<<i+1;   
        
        //size, permission, last modified,  ownership
        printDetails(temp[i], dirname);
    
        //name of file
        cout<<"\t"<<temp[i]<<endl;
    }
    /// yahn edit kia h
    chdir(dirname);
    getcwd(cd,cdsize);
    currentdir=string(cd);

    // moveCur(windowSize()-5,0);

    // cout<<"-----NORMAL MODE-----"<<endl<<endl<<endl<<"Current Directory :"<<string(currentdir)<<endl;

    // moveCur(1,0);
    moveCur(windowSize()-5,0); 
    cout<<"Current Directory :"<<string(currentdir); 
    moveCur(1,0);

    closedir(dir);
}

//////////////////////////////////Enter function //////////////////////////////////////////////

void enter()
{
    struct stat s2;
    char *filename = temp[top+cursor-1];
    
    lstat(filename, &s2);
    
    // cout<<"\n dekho "<<S_ISDIR(s2.st_mode)<<"\n";

    if(S_ISDIR(s2.st_mode))        //if it is directory
    {
        
        if(strcmp(filename, "..")==0)
        {
            forwardStack.push(currentdir);
            string r = substring(currentdir);
            currentdir = r;
            ListFile(r.c_str());
            ////////////
            printNormal();
            /////////////

            ///////////////////////////////////////////////////
            cursor = 1;
            moveCur(cursor,0);
            //////////////////////////////////////////////////

            return;
        }
        else if(strcmp(filename, ".")==0)
        {
            return ;
        }
        else
        {
            prevStack.push(currentdir);
            currentdir = currentdir + '/' + string(filename);

            /////////////////
            top=0;
            bottom = min(top+MAX, temp.size());
            ////////////////

            ListFile(currentdir.c_str());

            printNormal();
            /////////////
            ///////////////////////////////////////////////////
            cursor = 1;
            moveCur(cursor,0);
            //////////////////////////////////////////////////
 
        }
        
    }
    else{
		pid_t p=fork();
		if(p==0){
			execl("/usr/bin/xdg-open","xdg-open",filename,NULL);
			exit(1);
		}
	}
    
	return;
}

///////////////////////////////// Scroll functions ////////////////////////////////////////////

void ScrollUp()
{
    if(cursor > 1)
    {
        cursor--;
        moveCur(cursor,0);
    }

    else if(cursor == 1 && top >=1)
    {
        top--;
        bottom--;
        ListFile(currentdir.c_str());
        /////
        printNormal();
        /////
        moveCur(cursor,0);
    }
}

void ScrollDown()
{   
    if(cursor < MAX && cursor<temp.size() )
    {
        cursor++; 
        moveCur(cursor,0);
    }
    
    else if(bottom<temp.size())
    {
        top++;
        bottom++;
        ListFile(currentdir.c_str());

        printNormal();

        moveCur(cursor,0);
    }
    else if(bottom == temp.size())
    {
        moveCur(MAX,0);
        return;
    }
    
}

//////////////////////////////////Forward and Back function////////////////////////////////////

void forward()
{
    if(forwardStack.size() == 0)
        return;
    
    clr;
    string next = forwardStack.top();
    prevStack.push(currentdir);
    currentdir = next;

    top = 0;
    bottom = min(MAX, temp.size());

    ListFile(next.c_str());
    /////////
    printNormal();
    ///////////

    ///////////////////////////////////////////////////
    cursor = 1;
    moveCur(cursor,0);
    //////////////////////////////////////////////////
    
}

void back()
{
    if(prevStack.size() == 0)
        return ; 

    clr;
    string prev = prevStack.top();
    forwardStack.push(currentdir);
    currentdir = prev;

    top = 0;
    bottom = min(top+MAX, temp.size());

    ListFile(prev.c_str());
    //cout<<"Curret back: "<<currentdir<<"\n";
    ////////
    printNormal();
    ///////

    cursor = 1;
    moveCur(cursor,0);  
}

////////////////////////////////////Home key function /////////////////////////////////////////

void Home()
{
    uid_t uid;
    struct passwd* pw;
    uid = geteuid();
    pw = getpwuid(uid);

    pathhome = string(pw->pw_dir);
    prevStack.push(currentdir);
    currentdir = pathhome;

    ListFile(currentdir.c_str());
    printNormal();
}

////////////////////////////////// one level up function /////////////////////////////////////

void levelup()
{
    if(currentdir == pathhome)
        return;
    
    prevStack.push(currentdir);
    string r = substring(currentdir);
    currentdir = r;
    ListFile(r.c_str());
    printNormal();
    return;

}

/*************************************************Command Mode*******************************************************/

//////////////////////////////////////  getpath  //////////////////////////////////////////////

string getPath(string path)
{
    char arr[PATH_MAX];
    if(path[0] == '~')
    {
        uid_t uid;
        struct passwd* pw;
        uid = geteuid();
        pw = getpwuid(uid);
        pathhome = string(pw->pw_dir);
    
        pathhome = pathhome + path.substr(1,path.length());
        realpath(pathhome.c_str(),arr);
        
        return string(arr);
    }
    /////////////////////////// "handle "/" ///////////////////////////

    else
    {    
        realpath(path.c_str(),arr);
        return string(arr);
    }
}

/////////////////////////////////////  copy file/directory  //////////////////////////////////////////////////

void copy_file(string src, string dest)
{

    int file1, file2, res;
    char buf[1024];

    file1 = open(src.c_str(), O_RDONLY);
    // cout<<"\nfile1 "<<file1<<"\n";
    // cout<<" src "<<src<<"\n";
    file2 = open(dest.c_str(), O_WRONLY|O_CREAT, S_IRUSR|S_IWUSR|S_IRGRP|S_IROTH);

    while((res = read(file1, buf, 1024))>0)
    {
        write(file2, buf, res);
    }

}


void copy_dir(string src, string dest)
{
    DIR* di;
    struct dirent *entity;
    struct stat s5;

    if(!(di = opendir(src.c_str())))
        return;

    chdir(src.c_str());
    while((entity = readdir(di)))
    {
        lstat(entity->d_name, &s5);
        string filname = string(entity->d_name);

        if(S_ISDIR(s5.st_mode))
        {
            if((filname == ".") || (filname == ".."))
                continue;

            mkdir((dest + '/' + filname).c_str(), S_IRUSR|S_IWUSR|S_IXUSR);
            copy_dir(filname, dest + '/' + filname);
        }
        else
        {
            copy_file(filname, dest + '/' + filname);
        }
    }
    chdir("..");
    closedir(di);
    return ;
}


void Copy()
{
    int length = commandString.size();
    string dest = commandString[length - 1];
  

    struct stat s4;
    for(int i=1; i<length-1; i++)
    {
        string src = commandString[i];

        char srcPath[PATH_MAX];
        realpath(src.c_str(),srcPath);

        int n = string(srcPath).size();
        string connect;
        for(int i=n; i>=0; i--)
        {
            if(srcPath[i] != '/')
            {
                connect = connect + srcPath[i];
            }
            else
            {
                break;
            }
        }
        reverse(connect.begin(), connect.end());
        
        char destPath[PATH_MAX];
        realpath(dest.c_str(),destPath);
        
        lstat(srcPath, &s4);
        if(S_ISDIR(s4.st_mode))
        {
            mkdir((dest + '/' + src).c_str(), S_IRUSR|S_IWUSR|S_IXUSR);
            copy_dir(src, dest + '/' + src);
        }
        else
        {
           copy_file(string(srcPath), string(destPath));
        }
    }    
}

///////////////////////////////////  rename ///////////////////////////////////////////////////

void Rename()
{
    int len = commandString.size();
    
    if(len > 2)
    {
        printStatus("Wrong No. of arguments");
    }

    string arg1 = commandString[1];
    string arg2 = commandString[2];

    /////////////////getpath use kar lo/////////////////
    arg1 = getPath(arg1);
    arg2 = getPath(arg2);

    char Old[PATH_MAX];
    char New[PATH_MAX];
    realpath((arg1).c_str(),Old);
    realpath((arg2).c_str(),New);
    

    if(realpath((arg1).c_str(),Old) == NULL){
        cout <<"\nIncorrect Path\n";
    }

    //////////////////tilda dekho/////////////////////////////////////

    rename(Old, New);
}

//////////////////////////////////  create file/Directory ///////////////////////////////////////////////

void createFile()
{
    string filname = commandString[1];
    string agr1 = commandString[2];

    char NewPath[PATH_MAX];

    string dest = getPath(agr1);
    
    realpath(dest.c_str(),NewPath);

    int result  = creat((string(NewPath) + '/' + filname).c_str(),S_IRUSR|S_IWUSR|S_IRGRP|S_IROTH);
    if(result == -1)
    {
        printStatus("Unable to create file");
        
    }
    else
    {
        printStatus("File created successfully");
    }
}

void createDirectory()
{
    string filname = commandString[1];
    string agr1 = commandString[2];
    
    char NewPath[PATH_MAX];

    string dest = getPath(agr1);
    
    realpath(dest.c_str(),NewPath);
    
    mkdir((string(NewPath) + '/' + filname).c_str(), S_IRUSR|S_IWUSR|S_IXUSR);

}

/////////////////////////////////  Delete file  /////////////////////////////////////////////

int delete_file()
{
    string dest = commandString[1];
    dest = getPath(dest);
    char destPath[PATH_MAX];

    realpath(dest.c_str(), destPath);
    int result = remove(destPath);
    return result;
}

//////////////////////////////// Delete Directory ////////////////////////////////////////////

void delete_directory(string destPath)
{
    DIR* di;
    struct dirent *entity;
    struct stat fileinfo;
    if(!(di = opendir(destPath.c_str())))
    {
        return ;
    }
    chdir(destPath.c_str());
    while((entity = readdir(di)))
    {
        lstat(entity->d_name, &fileinfo);
        string fname = string(entity->d_name);
        if(S_ISDIR(fileinfo.st_mode))
        {
            if(fname == "." || fname == "..")
            {
                continue;
            }
            delete_directory(fname);
            rmdir(fname.c_str());
        }
        else
        {
            remove(fname.c_str());
        }
    }
    chdir("..");
    closedir(di);
}

int delete_dir()
{
    string dest = commandString[1];

    if(dest == currentdir)
    {
        return 0;
    }    
    else if(dest == "." || dest == "..")
    {
        return 0;
    }

    char destPath[PATH_MAX];
    dest = getPath(dest);

    realpath(dest.c_str(), destPath);
    delete_directory(string(destPath));
    rmdir(destPath);
    return 1;

}

/////////////////////////////////   Goto  //////////////////////////////////////////////////////

void GOTO()
{
    int len = commandString.size();

    if(len > 2)
    {
        printStatus("Wrong No. of arguments");
    }

    string dest = commandString[1];
    dest = getPath(dest);
    clr;
    ListFile(dest.c_str());
    printCommand();
}

////////////////////////////////////  move  ////////////////////////////////////////////////////

void moveDir(string src, string dest)
{
    mkdir((dest).c_str(),S_IRUSR|S_IWUSR|S_IXUSR);
    copy_dir(src, dest);
    //deletedir
    delete_directory(src);
    rmdir(src.c_str());
}

void Move()
{
    int length = commandString.size();
    string dest = commandString[length - 1];

    struct stat fileInfo;
    for(int i=1; i<length-1; i++)
    {
        string src = commandString[i];

        char Old[PATH_MAX];
        char New[PATH_MAX];

        int n = src.length()-1;
        string connect;
        for(int i=n; i>=0; i--)
        {
            if(src[i] != '/')
            {
                connect = connect + src[i];
            }
            else
            {
                break;
            }
        }
        reverse(connect.begin(), connect.end());
        
        dest = dest + "/" + connect;

        dest = getPath(dest);

        realpath(src.c_str(),Old);
        realpath(dest.c_str(),New);

        lstat(src.c_str(), &fileInfo);

       // cout<<"\n check: "<<S_ISDIR(fileInfo.st_mode)<<"\n";
        if(S_ISDIR(fileInfo.st_mode))
        {
            moveDir(src, dest);
        }
        else
        {
            rename(Old,New);
        }    
    } 
}

/////////////////////////////////  Search  /////////////////////////////////////////////////////

bool search(string element, string pathS)
{
    int len = commandString.size();
        if(len > 2)
        {
            printStatus("Wrong No. of arguments");
        }
        
    DIR *dirr;
    struct dirent* entity;
    struct stat s3;

    
    if(!(dirr = opendir(pathS.c_str())))
        return false;
    
    while((entity = readdir(dirr)))
    {
        lstat(entity->d_name, &s3);
        string obtFile = string(entity->d_name);

        if(element == obtFile)
        {
           // ListFile(currentdir.c_str());
            return true;
        }
           

        //else if(element == "." || element == "..")
        else if(obtFile == "." || obtFile == "..")
            continue;

        else if(S_ISDIR(s3.st_mode))
        {
            string newpath = pathS + '/' + obtFile;
            bool x = search(element, newpath);
            if(x)
                return true;
        }
    }
   // chdir("..");
    closedir(dirr);
    return false;

}

/////////////////////////////// calling Functonality //////////////////////////////////////////

void functionality(string str)
{
    if(str == "goto")
    {
        prevStack.push(currentdir);
        GOTO();
    }

    else if(str == "rename")
    {
        Rename();   
        ListFile(currentdir.c_str());
        printCommand();
    }

    else if(str == "move")
    {
        Move();    
        ListFile(currentdir.c_str());
        printCommand();
    }

    else if(str == "search")
    {
        string element = commandString[1];
        bool result = search(element,currentdir);

        if(result)
        {
            ListFile(currentdir.c_str());
            printStatus("File is found");
            printCommand();

        }
        else
        {
            ListFile(currentdir.c_str());
            printCommand();
            printStatus("File not found");
            
        }
    }

    else if(str == "create_dir")
    {
        createDirectory();
        ListFile(currentdir.c_str());
        printCommand();
        printStatus("Directory created successfully");
    }

    else if(str == "create_file")
    {
        createFile();
        ListFile(currentdir.c_str());
        printCommand();
        printStatus("File created successfully");
    }

    else if(str == "copy")
    {
        Copy();
        //////
        ListFile(currentdir.c_str());
        printCommand();
        /////////
        printStatus("Copied Successfully");
    }

    else if(str == "delete_file")
    {
        int del = delete_file();
        if(del == 0)
        {
            ListFile(currentdir.c_str());
            printCommand();
            printStatus("File successfully deleted");
        }
        else
        {
            ListFile(currentdir.c_str());
            printCommand();
            printStatus("Deletion Failed");
        }
    }

    else if(str == "delete_dir")
    {
        int del = delete_dir();
        if(del != 0)
        {
            ListFile(currentdir.c_str());
            printCommand();
            printStatus("Directory deleted successfully");
        }
    }
    else
    {
        ListFile(currentdir.c_str());
        printCommand();
        printStatus("Invalid Command !");        
    }
    return ;
}


string GetCommand()
{
    char ch = '%';
    string command; 
    
    while(true)
    {
        ch = cin.get();
        if(ch == 27)
        {
            return "normal";
        }
        if(ch == 10)
        {
            Ccursor = 20;
            moveCur(windowSize()-8,Ccursor);
        
            ListFile(currentdir.c_str());
            printCommand();

            if(command == "quit")
            {
                clr;
                exit(0);
            }
            return command;
        }
        else 
        {
            if(ch == 127)
            {
                if(Ccursor == 20)
                    continue;
                
                command.pop_back();
                Ccursor--;

                clr;
                ListFile(currentdir.c_str());
                printCommand();
                moveCur(windowSize()-8,20);

                // command.pop_back();
                // Ccursor--;

               // cout<<command;
                cout<<command;
                
                moveCur(windowSize()-8,command.size()+20);
                
            }
            else
            {
                command.push_back(ch);
                cout<<ch;
                Ccursor++;
                moveCur(windowSize()-8,Ccursor);
            }  
        }     
    }
    return "done";
}


void CommandMode()
{
    printCommand();
    
    while(true)
    {
        commandString.clear();

        string command = GetCommand(); 

        if(command == "normal")
        {
            clr;
            ListFile(currentdir.c_str());
            printNormal();
            break;
        }

        string p="";
    
        for(int i=0; i<command.size(); i++)
        {
            
            if(command[i] != 32)
            {
                p = p+command[i];
            }
            else if(p.length()>0 && command[i] ==32)
            {
                commandString.push_back(p);
                p="";
            }
        }
        commandString.push_back(p);
        string q = commandString[0];
        functionality(q);
        
    }
    return ;   
}


////////////////////////////////// main function //////////////////////////////////////////////

int main()
{
    clr;   
    getcwd(cd,cdsize);
    currentdir = currentdir + string(cd);
    
    ListFile(cd);
    printNormal();
    
    EnableRawMode();

    char ch = '%';

    while(ch != 'q')
    {
        ch = cin.get();
        moveCur(top,0);
        switch (ch)
        {

            case ':': 
                CommandMode();
                break;
                
            case 'A':
                ScrollUp();
                break;

            case 'B':
                ScrollDown();
                break;

            case 10:
                enter();
                break;

            case 'C':
                forward();
                break;

            case 'D':
                back();
                break;

            case 104:
                Home();
                break;

            case 127:
                levelup();
                break;
            
            default:
                break;
        }
    }

    DisableRawMode();

    return 0;
}


