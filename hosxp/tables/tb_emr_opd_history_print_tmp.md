# `tb_emr_opd_history_print_tmp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | loginname | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "620226112153",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "620322085843",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "620417130034",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "620902083046",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "621213103038",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "630320130014",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "630714083030",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  },
  {
    "vn": "630729083050",
    "hn": "620000275",
    "loginname": "yuwa231",
    "log_datetime": "2020-08-05 11:51:16"
  }
]
```
