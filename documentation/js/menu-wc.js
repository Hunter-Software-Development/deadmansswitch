'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">deadmansswitch documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' : 'data-target="#xs-controllers-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' :
                                            'id="xs-controllers-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' : 'data-target="#xs-injectables-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' :
                                        'id="xs-injectables-links-module-AppModule-fd21043898ae7c356211223567d5af05dd1642b952500a4b75ba07af1a902f17ab4e83f794bf771dee8ac5cf102e06ca360aa7dbd91cf0d54ff11d0067311834"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CommonModule-f54ad124be35825acdffd25b5093f8035cc7dfef94f88ae91c1fb86acffc743297d08ffb2b524fe30b8c7322be8ffc2395f2564428295ac966905a10b1a00892"' : 'data-target="#xs-injectables-links-module-CommonModule-f54ad124be35825acdffd25b5093f8035cc7dfef94f88ae91c1fb86acffc743297d08ffb2b524fe30b8c7322be8ffc2395f2564428295ac966905a10b1a00892"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-f54ad124be35825acdffd25b5093f8035cc7dfef94f88ae91c1fb86acffc743297d08ffb2b524fe30b8c7322be8ffc2395f2564428295ac966905a10b1a00892"' :
                                        'id="xs-injectables-links-module-CommonModule-f54ad124be35825acdffd25b5093f8035cc7dfef94f88ae91c1fb86acffc743297d08ffb2b524fe30b8c7322be8ffc2395f2564428295ac966905a10b1a00892"' }>
                                        <li class="link">
                                            <a href="injectables/CommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VaultsModule.html" data-type="entity-link" >VaultsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VaultsModule-bc0fb8ea9426f04dc9a177595113b5259692ce85f780c79f0511f08fd451b8e7f858ead168b15efa7640c794101de828b9a93b5b05020086eb05dfe115fc2a12"' : 'data-target="#xs-injectables-links-module-VaultsModule-bc0fb8ea9426f04dc9a177595113b5259692ce85f780c79f0511f08fd451b8e7f858ead168b15efa7640c794101de828b9a93b5b05020086eb05dfe115fc2a12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VaultsModule-bc0fb8ea9426f04dc9a177595113b5259692ce85f780c79f0511f08fd451b8e7f858ead168b15efa7640c794101de828b9a93b5b05020086eb05dfe115fc2a12"' :
                                        'id="xs-injectables-links-module-VaultsModule-bc0fb8ea9426f04dc9a177595113b5259692ce85f780c79f0511f08fd451b8e7f858ead168b15efa7640c794101de828b9a93b5b05020086eb05dfe115fc2a12"' }>
                                        <li class="link">
                                            <a href="injectables/VaultsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaultsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateVaultInput.html" data-type="entity-link" >CreateVaultInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetVaultInput.html" data-type="entity-link" >GetVaultInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveVaultInput.html" data-type="entity-link" >RemoveVaultInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateVaultInput.html" data-type="entity-link" >UpdateVaultInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vault.html" data-type="entity-link" >Vault</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vault-1.html" data-type="entity-link" >Vault</a>
                            </li>
                            <li class="link">
                                <a href="classes/VaultsResolver.html" data-type="entity-link" >VaultsResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaultsService.html" data-type="entity-link" >VaultsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});