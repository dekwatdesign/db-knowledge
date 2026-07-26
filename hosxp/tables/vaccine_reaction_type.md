# `vaccine_reaction_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_reaction_type_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_reaction_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vaccine_reaction_type_name | vaccine_reaction_type_name | yes | 1 |
| PRIMARY | vaccine_reaction_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "vaccine_reaction_type_id": 1,
    "vaccine_reaction_type_name": "อาการแพ้ที่ไม่รุนแรง (Allergic reaction)"
  },
  {
    "vaccine_reaction_type_id": 2,
    "vaccine_reaction_type_name": "อาการแพ้ปานกลาง (Anaphylactoid reaction)"
  },
  {
    "vaccine_reaction_type_id": 3,
    "vaccine_reaction_type_name": "อาการแพ้รุนแรง (Anaphylaxis)"
  }
]
```
