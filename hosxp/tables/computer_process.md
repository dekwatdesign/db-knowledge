# `computer_process`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_name | varchar(100) | NO | PRI |  |  |  |
| pid | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| image_name | varchar(250) | YES |  | NULL |  |  |
| mem_usage | int(11) | YES |  | NULL |  |  |
| handle_count | int(11) | YES |  | NULL |  |  |
| thread_count | int(11) | YES |  | NULL |  |  |
| is64bit | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | no | 1 |
| PRIMARY | computer_name | yes | 1 |
| PRIMARY | pid | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer_name": "COM1",
    "pid": 2860,
    "name": "WmiPrvSE.exe",
    "image_name": "C:\\Windows\\system32\\wbem\\wmiprvse.exe",
    "mem_usage": 0,
    "handle_count": 116,
    "thread_count": 8,
    "is64bit": "Y",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 4920,
    "name": "TrustedInstaller.exe",
    "image_name": "C:\\Windows\\servicing\\TrustedInstaller.exe",
    "mem_usage": 0,
    "handle_count": 124,
    "thread_count": 6,
    "is64bit": "Y",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 4128,
    "name": "unsecapp.exe",
    "image_name": "C:\\Windows\\system32\\wbem\\unsecapp.exe",
    "mem_usage": 0,
    "handle_count": 76,
    "thread_count": 4,
    "is64bit": "Y",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 4616,
    "name": "taskhost.exe",
    "image_name": "C:\\Windows\\system32\\taskhost.exe",
    "mem_usage": 0,
    "handle_count": 94,
    "thread_count": 5,
    "is64bit": "Y",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 6044,
    "name": "WUDFHost.exe",
    "image_name": "C:\\Windows\\system32\\WUDFHost.exe",
    "mem_usage": 0,
    "handle_count": 203,
    "thread_count": 8,
    "is64bit": "Y",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 4708,
    "name": "audiodg.exe",
    "image_name": "C:\\Windows\\system32\\audiodg.exe",
    "mem_usage": 0,
    "handle_count": 0,
    "thread_count": 5,
    "is64bit": "N",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 4292,
    "name": "BMSHOSxPStandard43Export.exe",
    "image_name": "C:\\Users\\COM01\\AppData\\Roaming\\BMS\\BMSHOSxPStandard43Export\\BMSHOSxPStandard43Export.exe",
    "mem_usage": 0,
    "handle_count": 354,
    "thread_count": 19,
    "is64bit": "Y",
    "update_datetime": null
  },
  {
    "computer_name": "COM1",
    "pid": 2120,
    "name": "NMIndexingService.exe",
    "image_name": "C:\\Program Files\\Common Files\\Nero\\Lib\\NMIndexingService.exe",
    "mem_usage": 0,
    "handle_count": 128,
    "thread_count": 7,
    "is64bit": "Y",
    "update_datetime": null
  }
]
```
