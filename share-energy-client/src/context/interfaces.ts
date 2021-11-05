export interface IUserContext {
  username: string;
  password: string;
  login: () => void;
  logout: () => void;
  user: IUser | undefined;
  userErrorMessage: string | undefined;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export interface IUser {
  _id: string;
  numeroCliente: number;
  nomeCliente: string;
  usuario: string;
  senha: string;
  tipo: string;
  email: string;
  token: string;
  usinas: IUsina[];
}

export interface IUsina {
  usinaId: number;
  percentualDeParticipacao: number;
}

export interface ICompContext {
  toggleDrawer: any;
  sidebarState: { left: boolean, right: boolean };
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
}

export interface IPlantContext {
  plantInfo: IPlantInfo[] | undefined;
  plantRequestError: string | undefined;
  getPlantInfo: (token: string, username: string, type: string) => void;
  selectedPlant: IPlantInfo | undefined;
  selectPlant: (plant: string) => void;
  chartKey: keyof IPlantDataItem;
  setChartKey: (key: keyof IPlantDataItem) => void;
}

export interface IPlantDataItem {
  tempo_h: number;
  tensao_V: number;
  corrente_A: number;
  potencia_kW: number;
  temperatura_C: number;
}

export interface IPlantInfo {
  plantName: string;
  localization: string;
  state: string;
  country: string;
  data: IPlantDataItem[];
}

export interface IClientManagerContext {
  clientList: IUser[] | undefined;
  managerFilter: string;
  managerTerm: string;
  setClientList: (clientList: IUser[]) => void;
  setManagerFilter: (managerFilter: string) => void;
  setManagerTerm: (managerTerm: keyof IUser) => void;
  getClients: (token: string, username: string, type: string) => void;
  filteredClients: IUser[] | undefined;
  selectClient: (id: string) => void;
  selectedClient: IUser | undefined;
}

export interface ProdDetails {
  total: number
  khwTotal: number
  interval: number
}

export interface IFinancesContext {
  integrate: (data: IPlantDataItem[]) => void
  productionDetails: ProdDetails
}
