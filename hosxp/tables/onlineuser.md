# `onlineuser`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| appserver | varchar(150) | YES |  | NULL |  |  |
| computername | varchar(50) | YES | MUL | NULL |  |  |
| kskloginname | varchar(50) | YES |  | NULL |  |  |
| ksklogintime | datetime | YES | MUL | NULL |  |  |
| loginname | varchar(50) | YES |  | NULL |  |  |
| onlineid | varchar(50) | NO | PRI |  |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| servername | varchar(50) | YES |  | NULL |  |  |
| client_version | varchar(50) | YES |  | NULL |  |  |
| department | varchar(100) | YES |  | NULL |  |  |
| doctor_schedule_id | int(11) | YES |  | NULL |  |  |
| antivirus_name | varchar(150) | YES |  | NULL |  |  |
| antivirus_version | varchar(50) | YES |  | NULL |  |  |
| antivirus_update | varchar(10) | YES |  | NULL |  |  |
| os_name | varchar(100) | YES |  | NULL |  |  |
| database_server | varchar(150) | YES |  | NULL |  |  |
| gateway | varchar(50) | YES |  | NULL |  |  |
| is_admin | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| ip_address | varchar(100) | YES |  | NULL |  |  |
| internal_version_number | varchar(30) | YES |  | NULL |  |  |
| use_auto_config_url | char(1) | YES |  | NULL |  |  |
| auto_config_url | varchar(200) | YES |  | NULL |  |  |
| hardware_id | varchar(50) | YES |  | NULL |  |  |
| db_connection_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| computername | computername | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ksklogintime | ksklogintime | no | 1 |
| PRIMARY | onlineid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "appserver": "S08000201-00054 Windows NT 6.02.9200-3.69.5.19",
    "computername": "192.168.1.14",
    "kskloginname": "yuwa313",
    "ksklogintime": "2026-07-24 10:37:36",
    "loginname": "USER",
    "onlineid": "ID-{A33694FF-E0A1-4F7C-B9C8-51B96458E2C1}",
    "remark": "Station :S08000201-00054:Windows NT 6.02.9200: 4,194,303:Ryzen 3 PRO 4350G with Radeon Graphics  3,795 MHz.:Revision 24577",
    "servername": "S08000201-00054",
    "client_version": "3.69.5.19",
    "department": "ห้องตรวจ 5",
    "doctor_schedule_id": null,
    "antivirus_name": "",
    "antivirus_version": "",
    "antivirus_update": "",
    "os_name": "Windows NT 6.02.9200",
    "database_server": "hos@192.168.11.2",
    "gateway": null,
    "is_admin": "N",
    "hos_guid": null,
    "hos_guid_ext": null,
    "depcode": null,
    "ip_address": null,
    "internal_version_number": null,
    "use_auto_config_url": null,
    "auto_config_url": null,
    "hardware_id": null,
    "db_connection_count": null
  },
  {
    "appserver": "A63-0004 Windows NT 6.02.9200-3.68.9.4",
    "computername": "192.168.1.16",
    "kskloginname": "yuwa173",
    "ksklogintime": "2026-07-24 07:35:52",
    "loginname": "User",
    "onlineid": "ID-{FA085D43-489D-4E01-9A57-2E652079CA0A}",
    "remark": "Station :A63-0004:Windows NT 6.02.9200: 4,028,712:Core i3-9300  3,697 MHz.:Revision 40459",
    "servername": "A63-0004",
    "client_version": "3.68.9.4",
    "department": "การศึกษาพิเศษ",
    "doctor_schedule_id": null,
    "antivirus_name": "",
    "antivirus_version": "",
    "antivirus_update": "",
    "os_name": "Windows NT 6.02.9200",
    "database_server": "hos@192.168.11.2",
    "gateway": null,
    "is_admin": "N",
    "hos_guid": null,
    "hos_guid_ext": null,
    "depcode": null,
    "ip_address": null,
    "internal_version_number": null,
    "use_auto_config_url": null,
    "auto_config_url": null,
    "hardware_id": null,
    "db_connection_count": null
  }
]
```
