const loadComponent = (componentLink: string, componentDivId: string) => {
    try {
        const handler = window.CheckComponent.create({
            link: componentLink,
            onEvent: (event: any, data: any) => {
                console.log('event', event);
                console.log('data', data);
            }
        });
        handler.open();
        const componentElement = document.getElementById(
            'check-component-embedded-div',
        );
        if (componentElement) {
            const componentHolder = document.getElementById(componentDivId);
            componentHolder.appendChild(componentElement);
        }
    } catch (err) {
        // handle error
    }
};

export default loadComponent;