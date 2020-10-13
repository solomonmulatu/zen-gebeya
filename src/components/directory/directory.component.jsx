import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'
import {connect} from "react-redux";

const Directory =({directory})=>(



            <div className="directory-menu">
                {
                    directory.sections.map(section=>(
                        <MenuItem  key={section.id} title={section.title} imageurl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>
                    ))
                }
            </div>


)

const mapStateToProps=state=>({
    directory:state.directory

})
export default connect(mapStateToProps) (Directory);