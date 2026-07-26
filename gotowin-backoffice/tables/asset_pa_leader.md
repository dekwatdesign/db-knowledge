# `asset_pa_leader`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DOCLEADER_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_ID | varchar(10) | YES | UNI |  |  |  |
| HR_POSITION | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| HR_ID | HR_ID | yes | 1 |
| PRIMARY | DOCLEADER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "DOCLEADER_ID": 1,
    "HR_ID": "75",
    "HR_POSITION": "[MASKED_FULLNAME]",
    "updated_at": "2022-01-27 01:31:25",
    "created_at": "2022-01-27 01:31:25"
  },
  {
    "DOCLEADER_ID": 2,
    "HR_ID": "159",
    "HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-01-27 01:31:44",
    "created_at": "2022-01-27 01:31:44"
  },
  {
    "DOCLEADER_ID": 3,
    "HR_ID": "191",
    "HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-01-27 01:32:09",
    "created_at": "2022-01-27 01:32:09"
  },
  {
    "DOCLEADER_ID": 4,
    "HR_ID": "119",
    "HR_POSITION": "นักกิจกรรมบำบัด",
    "updated_at": "2022-01-27 01:32:31",
    "created_at": "2022-01-27 01:32:31"
  },
  {
    "DOCLEADER_ID": 5,
    "HR_ID": "81",
    "HR_POSITION": "เจ้าพนักงานทันตสาธารณสุข",
    "updated_at": "2022-01-27 01:33:32",
    "created_at": "2022-01-27 01:33:32"
  },
  {
    "DOCLEADER_ID": 6,
    "HR_ID": "147",
    "HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-01-27 02:41:47",
    "created_at": "2022-01-27 02:41:47"
  },
  {
    "DOCLEADER_ID": 7,
    "HR_ID": "90",
    "HR_POSITION": "เจ้าพนักงานเภสัชกรรม",
    "updated_at": "2022-01-27 02:45:20",
    "created_at": "2022-01-27 02:45:20"
  },
  {
    "DOCLEADER_ID": 8,
    "HR_ID": "210",
    "HR_POSITION": "นักกิจกรรมบำบัด",
    "updated_at": "2022-01-27 02:45:49",
    "created_at": "2022-01-27 02:45:49"
  }
]
```
