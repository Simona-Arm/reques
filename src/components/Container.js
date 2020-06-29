import React, {Component} from 'react';
import ContainerHeader from "./container-pages/ContainerHeader";
import ContainerHeaderTop from "./container-pages/ContainerHeaderTop";
import ContainerMain from "./container-pages/ContainerMain";
import ContainerFooter from "./container-pages/ContainerFooter";


let allData = []
let dat1;
let dat2;
let dat3;
let dat4;


class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClear: false,
		}
	}

	getHeaderData = headerDataObject => {
		dat1 = headerDataObject
	}
	getHeaderTopData = headerDataArr => {
		dat2 = headerDataArr
	}
	getMainData = mainDataObject => {
		dat3 = mainDataObject
		console.log(dat3)
	}

	getFooterData = footerDataObject => {
		dat4 = footerDataObject
	}

	update = (boo) => {
		this.setState({isClear: boo})
	}
	setDataToDB = () => {
		allData = [...dat1, dat2, ...dat3, ...dat4]
		console.log(allData)
		if (allData.length === 10 && allData.every(v => v !== undefined)) {
			console.log(allData, 456)
			this.update(true)
		}
	}


	render() {
		return (
			<div className="container">
				<ContainerHeader
					clearData={this.state.isClear}
					getHeaderData={this.getHeaderData}
					update={this.update}
				/>
				<ContainerHeaderTop
					clearData={this.state.isClear}
					getHeaderTopData={this.getHeaderTopData}
				/>
				<ContainerMain
					clearData={this.state.isClear}
					getMainData={this.getMainData}
				/>
				<ContainerFooter
					clearData={this.state.isClear}
					getFooterData={this.getFooterData}
				/>
				<button id="done"
				        onClick={this.setDataToDB}
				>DONE
				</button>
			</div>
		);
	}
}

export default Container;
