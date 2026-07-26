# `provis_religion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "00",
    "name": "อศาสนา/ไม่นับถือศาสนา",
    "hos_guid": null
  },
  {
    "code": "01",
    "name": "ศาสนาพุทธ",
    "hos_guid": null
  },
  {
    "code": "02",
    "name": "ศาสนาอิสลาม",
    "hos_guid": null
  },
  {
    "code": "03",
    "name": "ศาสนาคริสต์",
    "hos_guid": null
  },
  {
    "code": "04",
    "name": "ศาสนาพราหมณ์-ฮินดู",
    "hos_guid": null
  },
  {
    "code": "05",
    "name": "ศาสนาซิกข์",
    "hos_guid": null
  },
  {
    "code": "06",
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "code": "07",
    "name": "ศาสนาเชน",
    "hos_guid": null
  }
]
```
