export const DisableComponentById = (componentId) => {
    document.getElementById(componentId).style.pointerEvents = "none";
    document.getElementById(componentId).style.opacity = 0.4;
}

export const EnableComponentById = (componentId) => {
    document.getElementById(componentId).style = "none";
}