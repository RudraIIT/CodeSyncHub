import fs from 'fs';

const fetchDir = (dir,baseDir)=>{
    return new Promise((resolve,reject)=>{
        fs.readdir(dir,{withFileTypes:true},(err,files)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(files.map(file=> ({type:file.isDirectory() ? "dir":"file",name:file.name,path:`${baseDir}/${file.name}`})));
            }
        });
    });
};

const fetchFileContent = (file)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf8",(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
};

const saveFile = async(file,content)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,content,"utf8",(err)=>{
            if(err){
                return reject(err);
            }
            else{
                resolve();
            }
        });
    });
};

module.exports = {fetchDir,fetchFileContent,saveFile};