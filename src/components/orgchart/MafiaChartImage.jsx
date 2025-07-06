import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import don from '../../assets/images/don.png'
import underboss from '../../assets/images/underboss.png'
import consil from '../../assets/images/consil.png'


export default function MafiaChartImage() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                image: don,
                name: 'Don Vito Corleone',
                title: 'Mafia Boss'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: underboss,
                        name: 'Michael Corleone',
                        title: 'Underboss'
                    },
                    children: [
                        { label: 'Money Laundering Division' },
                        { label: 'Drug Operations' }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: consil ,
                        name: 'Tom Hagen',
                        title: 'Consigliere'
                    },
                    children: [
                        { label: 'Legal Affairs' },
                        { label: 'Political Relations' }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column align-items-center text-center p-3">
                    <img
                        alt={node.data.name}
                        src={node.data.image}
                        className="mb-2 border-circle"
                        style={{ width: '100px' }}
                    />
                    <div style={{ fontSize: '12px' }}>{node.data.name}</div>
                    <div style={{ fontSize: '14px' }}>{node.data.title}</div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart
                value={data}
                selectionMode="multiple"
                selection={selection}
                onSelectionChange={(e) => setSelection(e.data)}
                nodeTemplate={nodeTemplate}
            />
        </div>
    );
}
