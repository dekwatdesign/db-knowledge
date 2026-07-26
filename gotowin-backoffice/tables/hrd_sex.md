# `hrd_sex`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SEX_ID | varchar(10) | NO | PRI |  |  |  |
| SEX_NAME | varchar(50) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SEX_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "SEX_ID": "F",
    "SEX_NAME": "หญิง"
  },
  {
    "SEX_ID": "M",
    "SEX_NAME": "ชาย"
  }
]
```
