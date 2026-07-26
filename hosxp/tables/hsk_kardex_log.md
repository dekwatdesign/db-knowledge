# `hsk_kardex_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| an | varchar(10) | NO | PRI |  |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| spell_id | int(1) | YES | MUL | NULL |  |  |
| d_uudate_log | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | an | yes | 3 |
| spell_id | spell_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 33200,
    "hn": "670000001",
    "an": "670001235",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 2,
    "d_uudate_log": "2024-08-20 18:24:21"
  },
  {
    "id": 33201,
    "hn": "660001252",
    "an": "670001142",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_uudate_log": "2024-08-27 11:45:07"
  },
  {
    "id": 33202,
    "hn": "660001252",
    "an": "670001142",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_uudate_log": "2024-08-27 11:45:19"
  },
  {
    "id": 33203,
    "hn": "670001082",
    "an": "670001503",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 2,
    "d_uudate_log": "2024-08-30 15:20:48"
  },
  {
    "id": 33204,
    "hn": "670001082",
    "an": "670001503",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 2,
    "d_uudate_log": "2024-08-30 15:20:54"
  },
  {
    "id": 33205,
    "hn": "610000298",
    "an": "670001483",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 2,
    "d_uudate_log": "2024-08-31 20:37:48"
  },
  {
    "id": 33206,
    "hn": "660001191",
    "an": "670001328",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_uudate_log": "2024-09-04 10:24:26"
  },
  {
    "id": 33207,
    "hn": "670000832",
    "an": "670001462",
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_uudate_log": "2024-09-04 10:26:03"
  }
]
```
