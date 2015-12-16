import React from 'react';
import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import ArticleStore from '../stores/ArticleStore.js';
/*App Components*/
import Toolbar from '../common/Toolbar';
import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import UploadPictures from './../common/UploadPictures';
import AddVideo from './../common/AddVideo';
import Button from './../common/Button';
import ButtonFab from './../common/ButtonFab';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import typography from '../../settings/typography.js';
import IconBase from '../common/IconBase.js';
import Code from '../icons/code';

@connectToStores
@Radium
export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [ArticleStore];
    }

    static getPropsFromStores() {
        return ArticleStore.getState();
    }

    render() {
        return (
            <div id="ArticleForm">
                <Radium.Style
                    scopeSelector="#ArticleForm"
                    rules={{
                textarea:{fontFamily:typography.fontFamilyComic},
                }}/>
                <Toolbar title="New Article "/>
                <form className="ArticleFormClass">
                    <Button size="m" tip="Save Article" kind="primary">Submit</Button>
                    <ArticleTitle/>
                    <ArticleContent/>
                    <UploadPictures/>
                    <AddVideo/>
                </form>
            </div>
        )
    }
};
