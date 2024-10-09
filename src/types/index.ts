export interface IFileType {
	url: string;
	contentType: string;
	id: string;
}

export interface ICategory {
	id: string;
	name: string;
	description: string;
	fileResponse: IFileType;
}

export interface IProduct {
	id: string;
	name: string;
	files: IFileType[];
	sections: ISection[];
}

export interface ISection {
	name: string;
	description: string;
	file: IFileType;
	id: string;
}

export interface IFaq {
	name: string;
	description: string;
	id: string;
}

export interface IComponent {
	name: string;
	fileEntity: IFileType;
	id: string;
}

export interface IAccessory {
	name: string;
	fileResponses: IFileType[];
	id: string;
}

export interface ICharacteristics {
	name: string;
	characteristicDetails: ICharacteristicsDetail[];
	id: string;
}

export interface ICharacteristicsDetail {
	name: string;
	detail: string;
	id: string;
}
