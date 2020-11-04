/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from 'inversify';
import { CatContribution } from './cat-contribution';


export default new ContainerModule(bind => {

    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(CatContribution)
    bind(CatContribution).toSelf();
});
