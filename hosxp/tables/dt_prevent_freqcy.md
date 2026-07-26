# `dt_prevent_freqcy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_freqcy_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_freqcy_numofday | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_montofri | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_sattosun | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_freqdurmeals | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_freqdurmeals2 | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_freqbetmeals | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_freqbetmeals2 | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_freqbeforbed | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_freqbeforbed2 | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_avgsugarexpo | double(11,2) | YES |  | NULL |  |  |
| dt_prevent_freqcy_duratandexpo | int(11) | YES |  | NULL |  |  |
| dt_prevent_freqcy_mostordrink | text | YES |  | NULL |  |  |
| dt_prevent_freqcy_snack_grp_chk | varchar(200) | YES |  | NULL |  |  |
| dt_prevent_freqcy_tendtogood | varchar(150) | YES |  | NULL |  |  |
| dt_prevent_freqcy_tendtobad | varchar(150) | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent26 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_freqcy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
