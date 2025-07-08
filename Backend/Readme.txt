IN ReadMe file 
from anaconda navigator opened vscode :- default anaconda environment Base will open
write npm run dev in Email_UI
in Backend :-
in command prompt created a new environment named venv using 
    conda create -n venv python=3.9
    conda activate
and in that environment installed all above libraries

It is better to add the venv in .ignore file , such that users no need to acquire that , as it was large file 

C:\Users\heman\Downloads\email spam detection\Backend\venv :- my environment
to check all the libraries present in this environment use command => pip freeze
to run app.py use => python app.py


In command palette => search for the python interpreter 
in that wait for a second to see your venv environment select that , such that ur current project takes the libraries and models present in it





Open VS Code settings (Ctrl + ,)
Search: "Activate Environment"
Make sure this is checked: ✅ Python › Terminal: Activate Environment


//// while doing to check the environment use the where python 
where python
//// if not venv then activate that too
.\Backend\venv\Scripts\activate
C:\Users\heman\Downloads\email spam detection\Backend\venv\Scripts\python.exe
// to check the environment libraries use
pip freeze