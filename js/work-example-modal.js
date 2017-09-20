import React from 'react';


class WorkExampleModal extends React.Component {

    render() {
       
        let example = this.props.example;
        return(
            <div class="background--skyBlue modal--closed">
                <span class="color--cloud modal__closeButton">
                    <i class="fa fa-window-close-o"></i>
                </span>
                <img alt={example.image.alt}
                    class="modal__image"
                    src={example.image.src}/>
                <div class="color--cloud modal__text">
                    <h2 class="modal__title">
                    {example.title}
                    </h2>
                    <a class="color--skyBlue modal__link"
                    href={example.href}>
                    Check it out
                    </a>
                    <p class="modal__description">
                    {example.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default WorkExampleModal;
