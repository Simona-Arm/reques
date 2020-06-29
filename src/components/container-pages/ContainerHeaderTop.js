import React, {useEffect, useState} from 'react';

let firstInput = [
	{id: 0, name: 'husali', title: "Հուսալի", checked: false},
	{id: 1, name: 'bavarar', title: "Բավարար որակ-գին հարաբերություն", checked: false},
	{id: 2, name: 'partachanach', title: "Պարտաճանաչ", checked: false},
	{id: 3, name: 'professional', title: "Պրոֆեսիոնալ", checked: false},]
let secondInput = [
	{id: 4, name: 'arag_ardzaganq', title: "Արագ արձագանք", checked: false},
	{id: 5, name: 'tank', title: "Թանկ ծառայություններ", checked: false},
	{id: 6, name: 'anvstaheli', title: "Անվստահելի", checked: false},
	{id: 7, name: 'voch_profesional', title: "Ոչ պրոֆեսիոնալ", checked: false},

]

function ContainerHeaderTop(props) {

	let [inputData, setInputData] = useState([])

	function checkIn(e, data, id) {
		let nevDateFool = [...inputData, data]
		firstInput.forEach(v => (v.id === id) && (v.checked = !v.checked))
		secondInput.forEach(v => (v.id === id) && (v.checked = !v.checked))
		e.target.checked ? nevDateFool = [...inputData, data] : nevDateFool = nevDateFool.filter(v => v.id !== id)
		setInputData(nevDateFool)
		props.getHeaderTopData({id: 4, data: nevDateFool})
	}
	useEffect(() => {
		if (props.clearData) {
			firstInput.forEach(v => v.checked = false)
			secondInput.forEach(v => v.checked = false)
		}
	})

	return (
		<>
			<div className="row nsheq_ayn_barery">
				<div className="col-sm-12">
					<h5>4. Նշեք այն բառերը որոնցով կբնութագրեք մեզ կամ մեր ծառայությունները։</h5>
					{firstInput.map((v) => (
						<div className="first"
						     key={v.id}>
							<div className="custom-control custom-checkbox" id="hoverinp">
								<input
									type="checkbox"
									className="custom-control-input"
									checked={v.checked}
									id={v.name}
									onChange={(e) => checkIn(e, v, v.id)}
								/>
								<label className="custom-control-label" htmlFor={v.name}>{v.title}</label>
							</div>
						</div>
					))}
					{secondInput.map((v) => (
						<div className="first"
						     key={v.id}>
							<div className="custom-control custom-checkbox" id="hoverinp">
								<input
									type="checkbox"
									className="custom-control-input"
									id={v.name}
									checked={v.checked}
									onChange={(e) => checkIn(e, v, v.id)}
								/>
								<label className="custom-control-label" htmlFor={v.name}>{v.title}</label>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);

}

export default ContainerHeaderTop;
