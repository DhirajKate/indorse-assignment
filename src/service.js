const importAll = (r) => r.keys().map(r);

const getAllImages = () => {
        return importAll(require.context('./assets/images/', false, /\.(png|jpe?g|svg)$/))
}
export { getAllImages };