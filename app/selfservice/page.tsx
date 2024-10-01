'use client'

import { useContext, useState } from "react";
import ConnectBankAccount from "../components/ConnectBankAccount";
import importScript from "../utils/importScript";
import { PageContextProvider } from "../utils/usePageContext";
import TeamSetup from "../components/TeamSetup";
import Submission from "../components/Submission";
import TaxSetup from "../components/TaxSetup";
import FilingAuthorization from "../components/FilingAuthorization";

export default function SelfService() {
    importScript('https://cdn.checkhq.com/component-initialize.js');
    const [currentStep, setCurrentStep] = useState("connect_bank_account");
    return (
        <PageContextProvider value={{
            currentStep,
            setCurrentStep
        }}>
            <div>
                {currentStep === "connect_bank_account" ? <ConnectBankAccount /> : null}
            </div>
            <div>
                {currentStep === "team_setup" ? <TeamSetup /> : null}
            </div>
            <div>
                {currentStep === "tax_setup" ? <TaxSetup /> : null}
            </div>
            <div>
                {currentStep === "filing_authorization" ? <FilingAuthorization /> : null}
            </div>
            <div>
                {currentStep === "ready_to_submit" ? <Submission /> : null}
            </div>
        </PageContextProvider>
    )
}