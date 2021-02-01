import React, { useContext } from 'react'
import { Player } from "./Player/Player";
import {DataContext} from "./Content/Data";
import { DragDropContainer } from 'react-drag-drop-container';
import DropZone from "react-drop-zone";
import "./music/music2.css";


export const Music1 = () => {

    const [data, setData] = useContext(DataContext);

    return (
        <div id={`Music1`}>
                <DropZone accept=".mp3, .ogg" onDrop={(file) =>{
                    const newEl =         {
                        name: file.name,
                        src: URL.createObjectURL(file),
                        id: `drop${Math.random()}`,
                        path: ''
                    };
                    setData({...data, Noisli: [...data.Noisli, newEl] });
                } }>
                {({over}) =>over?
                    <div className='DropZone'>Upuść tutaj</div>:
                    <div className='button' >Dodaj nowy dzwięk</div>
                }
                </DropZone>
            <div className='box'>
                { data.Noisli.map((music)=>{
                    if(music.path !== '')
                    music.path = `${window.location}/Noisli/`;
                        return (
                            <DragDropContainer
                                key={music.id}
                                dragData={music}
                            >
                                <Player
                                    prefix={`noisli`}
                                    music={music}
                                />
                            </DragDropContainer>
                            )
                    }
                )}
            </div>
        </div>
    )

}