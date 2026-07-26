# `pp_special_code_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_code_group | char(1) | NO | PRI |  |  |  |
| pp_special_code_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pp_special_code_group_name | pp_special_code_group_name | yes | 1 |
| PRIMARY | pp_special_code_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pp_special_code_group": "1",
    "pp_special_code_group_name": "กลุ่มกิจกรรมบริการบุคคล"
  },
  {
    "pp_special_code_group": "2",
    "pp_special_code_group_name": "กลุ่มกิจกรรมบริการชุมชน"
  }
]
```
