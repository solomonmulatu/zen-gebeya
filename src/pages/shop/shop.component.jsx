import React from "react";
import {Route} from 'react-router-dom'
import CollectionOverView from "../collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
const ShopPage=({match})=>(
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverView}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </div>
        )




export default ShopPage;