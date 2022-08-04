export interface RouteType {
  path: string;
  component: React.ComponentType<any> | undefined;
  title: string;
  isNavLinked: boolean;
}
