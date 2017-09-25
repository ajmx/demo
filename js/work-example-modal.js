import React from 'react';


class WorkExampleModal extends React.Component {

    render() {
       
        let example = this.props.example;
        let modalStyle = this.props.isOpen ? 'modal--open' : 'modal--closed';

        return(
            <div className={"background--skyBlue " + modalStyle}>
                <span className="color--cloud modal__closeButton"
                      onClick={this.props.closeMethod}>
                    <i className="fa fa-window-close-o"></i>
                </span>
                <img alt={example.image.alt}
                    className="modal__image"
                    src={example.image.src}/>
                <div className="color--cloud modal__text">
                    <h2 className="modal__title">
                    {example.title}
                    </h2>
                    <a className="color--skyBlue modal__link"
                    href={example.href}>
                    Check it out
                    </a>
                    <p className="modal__description">
                    {example.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default WorkExampleModal;
