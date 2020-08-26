class FormGenerator {

    static generateForm(...formElementsArray) {
        {
            formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}

                    elementType={formElement.config.elementType}

                    elementConfig={formElement.config.elementConfig}

                    value={formElement.config.value}

                    label={formElement.config.label}

                    changed={(event) => this.inputChangedHandler(event, formElement.id)}

                    inValid={!formElement.config.valid}

                    shouldValidate={formElement.config.validation}

                    confirmName={(event) => this.confirmName(event)}

                    css={formElement.config.css}

                    touched={formElement.config.touched}

                    desc={formElement.config.desc} />
            ))
        }
    }
}