# `religion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| religion | char(2) | NO | PRI |  |  |  |
| name | varchar(40) | YES | MUL | NULL |  |  |
| nhso_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | religion | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "religion": "00",
    "name": "ไม่ระบุศาสนา",
    "nhso_code": "99",
    "hos_guid": null
  },
  {
    "religion": "01",
    "name": "พุทธ",
    "nhso_code": "01",
    "hos_guid": null
  },
  {
    "religion": "02",
    "name": "คริสต์",
    "nhso_code": "03",
    "hos_guid": null
  },
  {
    "religion": "03",
    "name": "อิสลาม",
    "nhso_code": "02",
    "hos_guid": null
  },
  {
    "religion": "04",
    "name": "ฮินดู",
    "nhso_code": "04",
    "hos_guid": null
  },
  {
    "religion": "05",
    "name": "พราหมณ์",
    "nhso_code": "04",
    "hos_guid": null
  },
  {
    "religion": "06",
    "name": "ศาสนาอื่นๆ",
    "nhso_code": "99",
    "hos_guid": null
  }
]
```
