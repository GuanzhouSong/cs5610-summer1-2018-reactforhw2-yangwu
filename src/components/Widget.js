import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingNameChanged: (widgetId, newName) =>
        actions.headingNameChanged(dispatch, widgetId, newName),

    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    paragraphNameChanged: (widgetId, newName) =>
        actions.paragraphNameChanged(dispatch, widgetId, newName),

    listNameChanged: (widgetId, newName) =>
        actions.listNameChanged(dispatch, widgetId, newName),
    listTypeChanged: (widgetId, newType) =>
        actions.listTypeChanged(dispatch, widgetId, newType),
    listTextChanged: (widgetId, newText) =>
        actions.listTextChanged(dispatch, widgetId, newText),

    imageTextChanged: (widgetId, newText) =>
        actions.imageTextChanged(dispatch, widgetId, newText),
    imageNameChanged: (widgetId, newName) =>
        actions.imageNameChanged(dispatch, widgetId, newName),

    linkTextChanged: (widgetId, newText) =>
        actions.linkTextChanged(dispatch, widgetId, newText),
    linkNameChanged: (widgetId, newName) =>
        actions.linkNameChanged(dispatch, widgetId, newName),
});



const stateToPropsMapper = state => ({
    preview: state.preview
});


const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
    let selectElem;
    let inputElem;
    let nameElem;
    console.log(widget.size)
    return(

        <div>
            <div hidden={preview}>
            <h2> Heading Widget {widget.size}</h2>
                <input className="form-control" type="text" onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}
                       placeholder="Heading text"/>
                <select className="form-control" onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <input className="form-control" onChange={() => headingNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}
                placeholder="Widget Name"/>
                <h3>Preview</h3>
            </div>

                {widget.size == 1 && <h1>{widget.text}</h1>}
                {widget.size == 2 && <h2>{widget.text}</h2>}
                {widget.size == 3 && <h3>{widget.text}</h3>}

        </div>
    )
};

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

const Paragraph = ({widget, preview, paragraphTextChanged, paragraphNameChanged}) => {
    console.log(widget.id);
    let inputElem ;
    let nameElem;
    return(
        <div>
            <div hidden={preview}>
            <h2> Paragraph Widget </h2>

            <textarea onChange={() => paragraphTextChanged(widget.id, inputElem.value )}
                       value={widget.text}
                       ref={node => inputElem = node}
                    placeholder="Paragraph text"/>

            <input className="form-control" onChange={() => paragraphNameChanged(widget.id, nameElem.value)}
                   value={widget.name}
                   ref={node => nameElem = node}
                   placeholder="Widget name"/>

                <h3>Preview</h3>

            </div>

            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}


        </div>
    )
};

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);


const List = ({widget, preview, listNameChanged, listTextChanged, listTypeChanged}) => {
    let inputElem;
    let nameElem;
    let typeElem;
    return (
        <div>
            <div hidden={preview}>
            <h2>List Widget</h2>

                <form>
                 <textarea onChange={() => listTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           ref={node => inputElem = node}
                           placeholder="Enter one list item per line"/>

                    <select className="form-control" onChange={() => listTypeChanged(widget.id, typeElem.value)}
                            value={widget.listType}
                            ref={node => typeElem = node}>
                        <option>Unordered list</option>
                        <option>ordered list</option>
                    </select>

                    <input className="form-control" onChange={() => listNameChanged(widget.id, nameElem.value)}
                           value={widget.name}
                           ref={node=> nameElem = node}
                           placeholder="Widget name"/>
                </form>
                <h3>Preview</h3>
            </div>
                {widget.size == 1 && <h1>{widget.text}</h1>}
                {widget.size == 2 && <h2>{widget.text}</h2>}
                {widget.size == 3 && <h3>{widget.text}</h3>}

        </div>
    )
};

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);


const Image = ({widget, preview, imageNameChanged, imageTextChanged}) => {
    let inputElem;
    let nameElem;
    return (
        <div>
            <div hidden={preview}>
            <h2>Image Widget</h2>

                <input className="form-control" onChange={() => imageTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}
                       placeholder="Image URL"/>
                <input className="form-control" onChange={() => imageNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}
                       placeholder="Widget name"/>
                <img src={widget.text}/>
            <h3>Preview</h3>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
};

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)


const Link = ({widget, preview, linkNameChanged, linkTextChanged}) => {
    let inputElem;
    let nameElem;
    return (
        <div>
            <div hidden={preview}>
            <h2>Link Widget</h2>



                <input className="form-control" onChange={() => linkTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node=> inputElem = node}
                placeholder="Link URL"/>
                <input className="form-control" onChange={() => linkNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node=> nameElem = node}
                       placeholder="Widget name"/>

                <h3>Preview</h3>
            </div>
                {widget.size == 1 && <h1>{widget.text}</h1>}
                {widget.size == 2 && <h2>{widget.text}</h2>}
                {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
};

const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);

const Widget = ({widget, preview, dispatch}) => {
    let selectElement;

    return(
        <li>
            <div hidden={preview}>

                <form className="form-inline">
                <button>up</button>
                <button>down</button>
                <select className="form-control" value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>

                <button className="btn btn-primary" onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}>Delete</button>
                </form>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}

            </div>
        </li>
    )
};


const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget);

export default WidgetContainer