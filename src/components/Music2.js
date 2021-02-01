import React, {useContext} from 'react';
import {Player} from "./Player/Player";
import {Route} from "react-router-dom";
import DropZone from 'react-drop-zone';
import 'react-drop-zone/dist/styles.css';
import {DataContext} from "./Content/Data";
import {DragDropContainer} from "react-drag-drop-container";
import "./music/music2.css";

export const Music2 = () => {
        const [data, setData] = useContext(DataContext);
        return (
            <div id={`Music2`}>

                    <DropZone accept=".mp3, .ogg" onDrop={(file) =>{
                        const newEl =         {
                            name: file.name,
                            src: URL.createObjectURL(file),
                            id: `drop${Math.random()}`,
                            path: ''
                        };
                        setData({...data, Music: [...data.Music, newEl] });
                    } }>
                        {({over}) =>over?
                            <div className='DropZone'>Upuść tutaj</div>:
                            <div className='button'>Dodaj nowy element</div>
                        }
                    </DropZone>

                <div className="boxList">
                    {data.Music.map((music)=>{
                        if( music.path!=='')
                        music.path=`${window.location}/Music/`;
                        return (
                            <DragDropContainer
                                key={music.id}
                                dragData={music}
                            >
                                <Player
                                    prefix={`music`}
                                    music={music}
                                />
                            </DragDropContainer>
                        )
                        }
                    )}
                </div>
                    <Route path="/Music2/" >
                            <DropZone accept=".mp3, .ogg" onDrop={(file) =>{
                                const newEl =         {
                                        name: file.name,
                                        src: URL.createObjectURL(file),
                                        id: `drop${Math.random()}`,
                                        icon: '',
                                        path: true
                                    };
                                setData({...data, Music: [...data.Music, newEl] });
                            } }>
                                    {
                                            ({ over, overDocument }) =>
                                                <div className='DropZone'>
                                                        {
                                                                over ?
                                                                    'Upuść element' :
                                                                    overDocument ?
                                                                        'Plik dodany do listy' :
                                                                        'Dodaj nowy plików.'
                                                        }
                                                </div>
                                    }
                            </DropZone>
                    </Route>
            </div>
        )
}