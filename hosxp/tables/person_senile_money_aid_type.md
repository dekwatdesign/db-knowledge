# `person_senile_money_aid_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_senile_money_aid_type_id | int(11) | NO | PRI | 0 |  |  |
| person_senile_money_aid_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_senile_money_aid_type_name | person_senile_money_aid_type_name | yes | 1 |
| PRIMARY | person_senile_money_aid_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_senile_money_aid_type_id": 0,
    "person_senile_money_aid_type_name": "ไม่ได้รับ",
    "hos_guid": "{89E6747C-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_money_aid_type_id": 1,
    "person_senile_money_aid_type_name": "ได้รับ",
    "hos_guid": "{89E676AC-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_senile_money_aid_type_id": 9,
    "person_senile_money_aid_type_name": "ไม่ทราบ",
    "hos_guid": "{89E677A6-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
