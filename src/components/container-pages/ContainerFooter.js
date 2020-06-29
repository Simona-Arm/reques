import React, {Component, useEffect, useState} from 'react';


let yesOrNot = [
	{id: 0, name: 'optradio', title: 'Այո', checked: false},
	{id: 1, name: 'optradio', title: 'Ոչ', checked: false}
]

function ContainerFooter(props) {

	let [rangInp, setRangInp] = useState('0')
	let [yesOrNt, setYesOrNot] = useState(null)

	let [files, setFiles] = useState([])
	let [offerAnd, setOfferAnd] = useState('')


	function handelChange(e) {
		setFiles(e.target.files)
	}

	function handelCheck(id) {
		yesOrNot.forEach(v => v.id === id ? v.checked = true : v.checked = false)
		yesOrNt = id
		setYesOrNot(yesOrNt)
	}

	function update() {
		setRangInp('0')
		setYesOrNot(null)
		setFiles([])
		setOfferAnd('')
	}

	useEffect(() => {
		console.log(files);
		props.getFooterData([
			{id: 7, data: rangInp},
			{id: 8, data: yesOrNot},
			{id: 9, data: files},
			{id: 10, data: offerAnd},
		])
		if (props.clearData) {
			yesOrNot.forEach(v => v.checked = false)
			update()
		}
	})

	return (
		<>
			<div className="row  vorqan_jamanak">
				<div className="col-sm-12">
					<h5>7. Որքա՞ն ժամանակ եք հատկացնում ծրագրավորմանը շաբաթական կտրվածքով։</h5>
					<span>{rangInp + '  Ժամ'}</span>
					<input type='range'
					       onChange={(e) => setRangInp(e.target.value)}
					       value={rangInp}
					       min='0'
					       max='50'/>
				</div>
			</div>
			<div className="row ardyoq_uneq">
				<div className="col-sm-12">
					<h5>8. Արդյոք ունեք կատարված ներկայանալի աշխատանքներ, Ձեր անցած դասընթացների շրջանակում։</h5>
					{yesOrNot.map(v => (
						<div className="form-check" id="hoverinp" key={v.id}>
							<label className="form-check-label">
								<input
									type="radio"
									className="form-check-input"
									name={v.name}
									onChange={() => handelCheck(v.id)}
								/>{v.title}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="row ete_ayo">
				<div className="col-sm-12">
					<h5>9. Եթե այո, խնդրում ենք ուղարկել կատարած աշխատանքի կայքի հղումներ, նշելով Ձեր կատարած մասը,
						կամ ամպային
						պահեստավորման ֆայլեր (Google Drive files)։</h5>
				</div>
				<input id="input"
				       multiple onChange={(e) => handelChange(e)} name="add_file" type="file"/><br/><br/>
			</div>
			<div className="row xndrum-enq">
				<div className="col-sm-12">
					<h5>10. Խնդրում ենք գրել Ձեր առաջարկությունները կամ բողոքները։</h5>
					<input
						onChange={(e) => setOfferAnd(e.target.value)}
						id="auto" type="text"
						value={offerAnd}
						required={true}
						autoFocus/>
				</div>
			</div>

		</>
	);


}


export default ContainerFooter;
