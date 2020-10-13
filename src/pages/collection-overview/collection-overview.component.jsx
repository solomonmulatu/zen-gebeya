import React from "react";
import CollectionPreview from "../preview-collection/collection-preview.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop/shop.selector";

const CollectionOverView=({collections})=>(
    <div className='collection-overview'>
        {
            collections.map(({id, ...collectionProps}) => (//this is the same as title and other properties passed
                <CollectionPreview key={id} {...collectionProps}/>

            ))
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverView);