# `supplies_aspect`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ASPECT_ID | int | NO | PRI | NULL | auto_increment |  |
| ASPECT_NAME | varchar(255) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ASPECT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ASPECT_ID": 1,
    "ASPECT_NAME": "เกณฑ์ราคา"
  },
  {
    "ASPECT_ID": 2,
    "ASPECT_NAME": "เกณฑ์ประเมินประสิทธิภาพต่อราคา"
  }
]
```
