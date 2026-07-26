# `computer_hardware`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_name | varchar(100) | NO | PRI |  |  |  |
| computer_system_name | varchar(100) | YES |  | NULL |  |  |
| computer_model_name | varchar(200) | YES |  | NULL |  |  |
| operating_system | varchar(100) | YES |  | NULL |  |  |
| cpu_name | varchar(150) | YES |  | NULL |  |  |
| cpu_cache | varchar(100) | YES |  | NULL |  |  |
| cpu_core_count | int(11) | YES |  | NULL |  |  |
| cpu_thread_count | int(11) | YES |  | NULL |  |  |
| memory_mb | int(11) | YES |  | NULL |  |  |
| graphics | varchar(200) | YES |  | NULL |  |  |
| horz_res | int(11) | YES |  | NULL |  |  |
| vert_res | int(11) | YES |  | NULL |  |  |
| antivirus_name | varchar(200) | YES |  | NULL |  |  |
| antivirus_state | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| storage_list | text | YES |  | NULL |  |  |
| storage_sys_size | int(11) | YES |  | NULL |  |  |
| storage_sys_free | int(11) | YES |  | NULL |  |  |
| storage_sys_free_percent | double(15,3) | YES |  | NULL |  |  |
| update_process_unix_time | int(11) | YES |  | NULL |  |  |
| default_stock_department_id | int(11) | YES |  | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| last_dbstore_install | datetime | YES |  | NULL |  |  |
| last_dbstore_version | varchar(100) | YES |  | NULL |  |  |
| ignore_dbstore_update | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| PRIMARY | computer_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer_name": "",
    "computer_system_name": "FUJITSU",
    "computer_model_name": "PRIMERGY TX150 S7",
    "operating_system": "Windows Server 2008 R2 Standard Full x64 Build 7600",
    "cpu_name": "Intel Xeon X3430 - 2390 MHz",
    "cpu_cache": "256 KB L1 + 1024 KB L2 + 8192 KB L3",
    "cpu_core_count": 4,
    "cpu_thread_count": 4,
    "memory_mb": 4055,
    "graphics": "Matrox G200e (ServerEngines) - English - 32 MB",
    "horz_res": 1280,
    "vert_res": 1024,
    "antivirus_name": "",
    "antivirus_state": null,
    "update_datetime": "2020-08-13 08:38:05",
    "storage_list": "C:  LSI RAID SAS 6G 0/1 100.00 Gb. [Free 78 Gb.]\r\nD:  LSI RAID SAS 6G 0/1 185.00 Gb. [Free 153 Gb.]",
    "storage_sys_size": 100005,
    "storage_sys_free": 80745,
    "storage_sys_free_percent": 80.74,
    "update_process_unix_time": 1597307863,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "A56-0114",
    "computer_system_name": "Acer",
    "computer_model_name": "Veriton M2610G",
    "operating_system": "Windows 10 Professional x64 Build 19045",
    "cpu_name": "Intel Core i5-2320 - 2990 MHz",
    "cpu_cache": "256 KB L1 + 1024 KB L2 + 6144 KB L3",
    "cpu_core_count": 4,
    "cpu_thread_count": 4,
    "memory_mb": 8170,
    "graphics": "NVIDIA GeForce 605 - 1024 MB",
    "horz_res": 1920,
    "vert_res": 1080,
    "antivirus_name": "Windows Defender",
    "antivirus_state": 397584,
    "update_datetime": "2026-05-08 11:32:45",
    "storage_list": "C:  WDC WDS500G2B0A-00SM50 204.00 Gb. [Free 13 Gb.]\r\nD:  WDC WDS500G2B0A-00SM50 272.00 Gb. [Free 49 Gb.]\r\nE:  ST1000DM003-1SB102 953.00 Gb. [Free 79 Gb.]\r\nH:  ST1000LM 035-1RK172 953.00 Gb. [Free 331 Gb.]\r\nJ:  ST1000LM 048-2E7172 953.00 Gb. [Free 72 Gb.]",
    "storage_sys_size": 204154,
    "storage_sys_free": 14230,
    "storage_sys_free_percent": 6.971,
    "update_process_unix_time": 1778239965,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "A60-0004",
    "computer_system_name": "Dell Inc.",
    "computer_model_name": "OptiPlex 3040",
    "operating_system": "Windows 10 Professional Build 19045",
    "cpu_name": "Intel Pentium G4400 - 3320 MHz",
    "cpu_cache": "128 KB L1 + 512 KB L2 + 3072 KB L3",
    "cpu_core_count": 2,
    "cpu_thread_count": 2,
    "memory_mb": 3502,
    "graphics": "Intel(R) HD Graphics - 0 MB, Intel(R) HD Graphics 510 - 1024 MB",
    "horz_res": 1280,
    "vert_res": 720,
    "antivirus_name": "Windows Defender",
    "antivirus_state": 397584,
    "update_datetime": "2026-05-28 17:59:57",
    "storage_list": "C:  TS256GSSD230S 147.00 Gb. [Free 36 Gb.]\r\nD:  TS256GSSD230S 94.00 Gb. [Free 44 Gb.]\r\nE:  ST1000DM003-1SB102 951.00 Gb. [Free 913 Gb.]",
    "storage_sys_size": 147406,
    "storage_sys_free": 37189,
    "storage_sys_free_percent": 25.229,
    "update_process_unix_time": 1779958164,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "ACER5750G",
    "computer_system_name": "Acer",
    "computer_model_name": "Aspire 5750G",
    "operating_system": "Windows 10 Professional x64 Build 19043",
    "cpu_name": "Intel Core i5-2410M - 2290 MHz",
    "cpu_cache": "128 KB L1 + 512 KB L2 + 3072 KB L3",
    "cpu_core_count": 2,
    "cpu_thread_count": 4,
    "memory_mb": 5995,
    "graphics": "Intel(R) HD Graphics 3000 - 2172 MB, NVIDIA GeForce GT 540M - 2048 MB",
    "horz_res": 1366,
    "vert_res": 768,
    "antivirus_name": "Windows Defender",
    "antivirus_state": 397568,
    "update_datetime": "2021-12-14 11:07:05",
    "storage_list": "C:  ST1000LM024 HN-M101MBB 204.00 Gb. [Free 12 Gb.]\r\nD:  ST1000LM024 HN-M101MBB 749.00 Gb. [Free 47 Gb.]",
    "storage_sys_size": 204232,
    "storage_sys_free": 13147,
    "storage_sys_free_percent": 6.437,
    "update_process_unix_time": 1639478645,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "COM-PC",
    "computer_system_name": "Acer",
    "computer_model_name": "Veriton M2610G",
    "operating_system": "Windows 7 Ultimate Build 7600",
    "cpu_name": "Intel Core i5-2320 - 2990 MHz",
    "cpu_cache": "256 KB L1 + 1024 KB L2 + 6144 KB L3",
    "cpu_core_count": 4,
    "cpu_thread_count": 4,
    "memory_mb": 3058,
    "graphics": "Standard VGA Graphics Adapter - 14 MB",
    "horz_res": 1366,
    "vert_res": 768,
    "antivirus_name": "AVG Antivirus",
    "antivirus_state": 266240,
    "update_datetime": "2022-11-09 09:36:36",
    "storage_list": "C:  ST500DM002-1BD142 150.00 Gb. [Free 34 Gb.]\r\nD:  ST500DM002-1BD142 326.00 Gb. [Free 31 Gb.]",
    "storage_sys_size": 150005,
    "storage_sys_free": 35288,
    "storage_sys_free_percent": 23.525,
    "update_process_unix_time": 1667986355,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "COM01-YUWA",
    "computer_system_name": "Acer",
    "computer_model_name": "Veriton M2610G",
    "operating_system": "Windows Seven Ultimate",
    "cpu_name": "Intel Core i5-2320 - 2990 MHz",
    "cpu_cache": "128 KB L1 + 512 KB L2 + 6144 KB L3",
    "cpu_core_count": 2,
    "cpu_thread_count": 4,
    "memory_mb": 3058,
    "graphics": "Standard VGA Graphics Adapter - 14 MB",
    "horz_res": 1366,
    "vert_res": 768,
    "antivirus_name": "Avast Antivirus",
    "antivirus_state": 266240,
    "update_datetime": "2017-11-03 14:48:40",
    "storage_list": "C:  WDC WD5000AAKX-603CA0 198.00 Gb. [Free 29 Gb.]\r\nD:  WDC WD5000AAKX-603CA0 269.00 Gb. [Free 9 Gb.]\r\nE:  WDC WD5000AAKX-603CA0 8.00 Gb. [Free 0 Gb.]\r\nK:  BUFFALO HD-PNTU3 1,907.00 Gb. [Free 8 Gb.]",
    "storage_sys_size": 198804,
    "storage_sys_free": 30385,
    "storage_sys_free_percent": 15.284,
    "update_process_unix_time": null,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "COM1",
    "computer_system_name": "Acer",
    "computer_model_name": "Veriton M2610G",
    "operating_system": "Windows Seven Ultimate",
    "cpu_name": "Intel Core i5-2320 - 2990 MHz",
    "cpu_cache": "128 KB L1 + 512 KB L2 + 6144 KB L3",
    "cpu_core_count": 2,
    "cpu_thread_count": 4,
    "memory_mb": 3058,
    "graphics": "Standard VGA Graphics Adapter - 14 MB",
    "horz_res": 1366,
    "vert_res": 768,
    "antivirus_name": "Avast Antivirus",
    "antivirus_state": 266240,
    "update_datetime": "2016-10-20 15:51:42",
    "storage_list": "C:  WDC WD5000AAKX-603CA0 198.00 Gb. [Free 96 Gb.]\r\nD:  WDC WD5000AAKX-603CA0 269.00 Gb. [Free 40 Gb.]\r\nE:  WDC WD5000AAKX-603CA0 8.00 Gb. [Free 0 Gb.]\r\nN:  MXT-USB Storage Device 15.00 Gb. [Free 2 Gb.]",
    "storage_sys_size": 198804,
    "storage_sys_free": 98871,
    "storage_sys_free_percent": 49.733,
    "update_process_unix_time": null,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  },
  {
    "computer_name": "DESKTOP-06LF1J5",
    "computer_system_name": "HP",
    "computer_model_name": "HP ProDesk 400 G6 SFF",
    "operating_system": "Windows 10 Home Single Language x64 Build 19042",
    "cpu_name": "Intel Core i7-8700 - 3190 MHz",
    "cpu_cache": "384 KB L1 + 1536 KB L2 + 12288 KB L3",
    "cpu_core_count": 6,
    "cpu_thread_count": 12,
    "memory_mb": 8030,
    "graphics": "Intel(R) UHD Graphics 630 - 0 MB",
    "horz_res": 1600,
    "vert_res": 900,
    "antivirus_name": "Windows Defender",
    "antivirus_state": 397568,
    "update_datetime": "2022-01-06 14:42:23",
    "storage_list": "C:  ST2000DM008-2FR102 121.00 Gb. [Free 59 Gb.]\r\nD:  ST2000DM008-2FR102 1,785.00 Gb. [Free 1,743 Gb.]",
    "storage_sys_size": 121162,
    "storage_sys_free": 60554,
    "storage_sys_free_percent": 49.977,
    "update_process_unix_time": 1641480143,
    "default_stock_department_id": null,
    "depcode": null,
    "last_dbstore_install": null,
    "last_dbstore_version": null,
    "ignore_dbstore_update": null
  }
]
```
