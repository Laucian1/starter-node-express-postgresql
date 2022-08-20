function hasProperties(...properties) {
    return function (req, res, next) {
        const { data = {} } = req.body;

        try {
            properties.forEach((property) => {
                if (!data[property]) {
                    const error = new Eroor(`A '${property}' property is required.`);
                    error.status = 400;
                    throw error;
                }
            });
            next();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = hasProperties;