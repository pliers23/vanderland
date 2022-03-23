[Unit] 
Description=Gear Node 
After=network.target 

[Service] 
Type=simple 
User=root 
WorkingDirectory=/root/ 
ExecStart=/root/gear-node \ 
        --name ProMloiytr457 \ 
        --execution wasm \ 
        --log runtime 
Restart=on-failure 
RestartSec=3 
LimitNOFILE=10000
 
[Install] 
WantedBy=multi-user.target
