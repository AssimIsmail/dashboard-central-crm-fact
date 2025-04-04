import { useState } from "react";
import { useUtilisateursContext } from "../context/utilisateurs/UtilisateursProvider";
import { useUtilisateurContext } from "../context/utilisateur/UtilisateurProvider";
import { UTILISATEURS_ACTIONS } from "../context/utilisateurs/UTILISATEURS_ACTIONS";
import UtilisateurService from "../services/UtilisateurService";
import { UTILISATEUR_ACTIONS } from "../context/utilisateur/UTILISATEUR_ACTIONS";

export default function useUtilisateursActions() {
  const { utilisateursDispatch } = useUtilisateursContext();
  const { utilisateurDispatch } = useUtilisateurContext();
  const [inProgress, setInProgress] = useState(false);
  async function getUtilisateurs(queryString) {
    try {
      utilisateursDispatch({
        type: UTILISATEURS_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await UtilisateurService.getUtilisateurs(queryString);
      utilisateursDispatch({
        type: UTILISATEURS_ACTIONS.SET_UTILISATEURS,
        payload: {
          utilisateurs: data.utilisateurs,
          pagination: {
            links: data.links,
            current_page: data.current_page,
            first_page: data.first_page,
            last_page: data.last_page,
          },
        },
      });
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      utilisateursDispatch({
        type: UTILISATEURS_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: false,
        },
      });
    }
  }
  async function getUtilisateur(utilisateurId) {
    try {
      utilisateurDispatch({
        type: UTILISATEUR_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await UtilisateurService.getUtilisateur(utilisateurId);
      utilisateurDispatch({
        type: UTILISATEUR_ACTIONS.SET_UTILISATEUR,
        payload: {
          utilisateurs: data.utilisateurs,
        },
      });
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      utilisateursDispatch({
        type: UTILISATEUR_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: false,
        },
      });
    }
  }
  async function createUtilisateur(payload) {
    try {
      setInProgress(true);
      const { data } = await UtilisateurService.createUtilisateur(payload);
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  async function updateUtilisateur(utilisateurId, payload) {
    try {
      setInProgress(true);
      const { data } = await UtilisateurService.updateUtilisateur(
        utilisateurId,
        payload
      );
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  async function updateStatusUtilisateur(utilisateurId, payload) {
    try {
      setInProgress(true);
      const { data } = await UtilisateurService.updateStatusUtilisateur(
        utilisateurId,
        payload
      );
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  async function updatePasswordUtilisateur(utilisateurId, payload) {
    try {
      setInProgress(true);
      const { data } = await UtilisateurService.updatePasswordUtilisateur(
        utilisateurId,
        payload
      );
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  return {
    getUtilisateurs,
    getUtilisateur,
    createUtilisateur,
    updateUtilisateur,
    updateStatusUtilisateur,
    updatePasswordUtilisateur,
    inProgress
  };
}
