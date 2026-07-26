# `pe_ros_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pe_ros_type_code | char(1) | NO | PRI |  |  |  |
| pe_ros_type_name | varchar(100) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pe_ros_type_name | pe_ros_type_name | yes | 1 |
| PRIMARY | pe_ros_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pe_ros_type_code": "-",
    "pe_ros_type_name": "Negative"
  },
  {
    "pe_ros_type_code": "+",
    "pe_ros_type_name": "Positive"
  }
]
```
