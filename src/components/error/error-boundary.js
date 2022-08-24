import { Component } from 'react';
import ErrorPage from './error-page';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // If wordpress has an error logging service, use it with the componentDidCatch lifecycle method.

  //   componentDidCatch(error, errorInfo) {
  //     // You can also log the error to an error reporting service
  //     logErrorToMyService(error, errorInfo);
  //   }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
