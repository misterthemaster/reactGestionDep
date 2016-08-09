import React from 'react';

const ListeDepenses = ({listeDep}) => {
	const filtreCat = [...new Set(listeDep.map(item => item.categorie))];

	return (
	<div className="col-md-8 col-sm-8">
		{filtreCat.map((categorie,index) =>
	    	<Categorie key={index} nom={categorie} liste={listeDep.filter(item => item.categorie === categorie)}/>		
		)}
	</div>
	);
};

const Categorie = ({...props}) => {
	return (
		<div>
			<h3>{props.nom}</h3>
			<table className="table table-bordered table-striped">
				<tbody>
					{props.liste.map(({id, desc, montant}) =>
						<LigneDep key={id} id={id} nomDep={desc} montant={montant}/>	
					)}
				</tbody>
			</table>
		</div>
	);
};

const LigneDep = ({...props}) => {
	return (
		<tr>
			<td>{props.nomDep}</td>
			<td>{props.montant}</td>
			<td><a data-id={props.id}>Edit</a></td>
			<td><a data-id={props.id}>Effacer</a></td>
		</tr>
	);
}

export default ListeDepenses; 