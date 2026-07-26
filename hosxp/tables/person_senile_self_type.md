# `person_senile_self_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_senile_self_type_id | int(11) | NO | PRI | 0 |  |  |
| person_senile_self_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_senile_self_type_name | person_senile_self_type_name | yes | 1 |
| PRIMARY | person_senile_self_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_senile_self_type_id": 1,
    "person_senile_self_type_name": "ได้ทุกเรื่อง",
    "hos_guid": "{8AB7F2B8-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_self_type_id": 2,
    "person_senile_self_type_name": "ช่วยตนเองได้บ้าง",
    "hos_guid": "{8AB7F4F2-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_self_type_id": 3,
    "person_senile_self_type_name": "ช่วยตนเองไม่ได้เลย",
    "hos_guid": "{8AB7F5EC-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
