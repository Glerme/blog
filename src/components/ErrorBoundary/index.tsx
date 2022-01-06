import React from 'react';

export class ErrorBoundary extends React.Component<
  {},
  {
    hasError: boolean;
    error: Error;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.error(error);
    console.error(errorInfo);
    this.setState({ hasError: true, error: error });
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}
