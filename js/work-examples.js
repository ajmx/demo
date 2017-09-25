import React from 'react';
import WorkExampleModal from './work-example-modal';

class WorkExamples extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            selectedExample: this.props.examples[0]
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(event, example){
        this.setState({
            'isModalOpen': true,
            'selectedExample': example
        })
    }

    closeModal(event){
        this.setState({
            'isModalOpen': false
        })
    }

    render() {
        return (
            <span>
                <section className="section section--alignCentered section--description">
                    {this.props.examples.map((example, idx) => {
                        return (
                                <WorkExample 
                                    work={example} 
                                    key={idx} 
                                    openModal={this.openModal}
                                />
                            )
                        })
                    }
                </section>
                <WorkExampleModal 
                    isOpen={this.state.isModalOpen} 
                    example={this.state.selectedExample} 
                    closeMethod={this.closeModal}
                />
            </span>
        )
    }
}

class WorkExample extends React.Component {
    render() {
        let work = this.props.work;
        return (
            <div className="section__exampleWrapper" 
                 onClick={(event) => {this.props.openModal(event, work)}}>
                <div className="section__example">
                    <img alt={work.image.alt}
                        className="section__exampleImage"
                        src={work.image.src} />          {work.image.comment}
                    <dl className="color--cloud">
                        <dt className="section__exampleTitle section__text--centered">
                            {work.title}
                        </dt>
                        <dd></dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default WorkExamples;
export { WorkExample } 