import { Participant } from '.';
import { Model } from '../model';
import { Circuit } from '../privacy/circuit';

// Workstep is a baseline workflow context
export type Workstep = Model & {
	id: string,
    	created_at: string,
   	name: string,
    	cardinality: number,
    	deployed_at: string,
    	metadata: {
        	prover: {
            		name: string,
            		identifier: string,
            		provider: string,
            		proving_scheme: string,
            		curve: string
       			}
    		},
    	prover_id: string,
    	require_finality: boolean,
    	status: string,
    	workflow_id: string,
    	workstep_id: string,
	circuit: Circuit;
	circuitId: string;
	participants: Participant[];
}
