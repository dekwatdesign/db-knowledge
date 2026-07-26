# `psych_assess_topic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_topic_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_topic_name | varchar(255) | YES |  | NULL |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_assess_topic_detail | text | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| PRIMARY | psych_assess_topic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_assess_topic_id": 1,
    "psych_assess_topic_name": "HONOS",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 2,
    "psych_assess_topic_name": "AUDIT",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 3,
    "psych_assess_topic_name": "AWS",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 4,
    "psych_assess_topic_name": "HoNoSCA",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 5,
    "psych_assess_topic_name": "Wechsler adult intelligence scale (WAIS III)",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 6,
    "psych_assess_topic_name": "JVK1",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 7,
    "psych_assess_topic_name": "JVK2",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  },
  {
    "psych_assess_topic_id": 8,
    "psych_assess_topic_name": "Wechsler adult intelligence scale (WAIS)",
    "psych_mdp_type_id": null,
    "psych_assess_topic_detail": null,
    "active": null
  }
]
```
