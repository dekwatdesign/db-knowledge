# `tb_web_base`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| web_id | varchar(255) | NO | PRI |  |  |  |
| web_name | varchar(255) | YES |  | NULL |  |  |
| web_host | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | web_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "web_id": "1",
    "web_name": "EMR_VIEW_NEW",
    "web_host": "http://192.168.10.7/emr/"
  }
]
```
