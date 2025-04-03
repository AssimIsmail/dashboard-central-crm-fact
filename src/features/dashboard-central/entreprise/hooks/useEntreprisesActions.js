import { useState } from "react";
import { useEntreprisesContext } from "../context/entreprises/EntreprisesProvider";
import { ENTREPRISES_ACTIONS } from "../context/entreprises/ENTREPRISES_ACTIONS";
import EntrepriseService from "../services/EntrepriseService";
import { useEntrepriseContext } from "../context/entreprise/EntrepriseProvider";
import { ENTREPRISE_ACTIONS } from "../context/entreprise/ENTREPRISE_ACTIONS";

export default function useEntreprisesActions() {
  const { entreprisesDispatch } = useEntreprisesContext();
  const { entrepriseDispatch } = useEntrepriseContext();
  const [inProgress, setInProgress] = useState(false);

  async function getEntreprises(queryString) {
    try {
      entreprisesDispatch({
        type: ENTREPRISES_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await EntrepriseService.getEntreprises(queryString);
      entreprisesDispatch({
        type: ENTREPRISES_ACTIONS.SET_ENTREPRISES,
        payload: {
          entreprises: data.entreprises,
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
      entreprisesDispatch({
        type: ENTREPRISES_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: false,
        },
      });
    }
  }
  async function getEntreprise(entrepriseId) {
    try {
      entrepriseDispatch({
        type: ENTREPRISE_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: true,
        },
      });
      const { data } = await EntrepriseService.getEntreprise(entrepriseId);
      entrepriseDispatch({
        type: ENTREPRISE_ACTIONS.SET_ENTREPRISE,
        payload: {
          entreprise: data.entreprise,
        },
      });
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      entrepriseDispatch({
        type: ENTREPRISE_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: false,
        },
      });
    }
  }
  async function createEntreprise(payload) {
    try {
      setInProgress(true);
      const { data } = await EntrepriseService.createEntreprise(payload);
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  async function updateEntreprise(entrepriseId , payload) {
    try {
      setInProgress(true);
      const { data } = await EntrepriseService.updateEntreprise(entrepriseId , payload);
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  async function updateStatusEntreprise(entrepriseId , payload) {
    try {
      setInProgress(true);
      const { data } = await EntrepriseService.updateStatusEntreprise(entrepriseId , payload);
      return data.message;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      setInProgress(false);
    }
  }
  return {
    getEntreprises,
    getEntreprise,
    createEntreprise,
    updateEntreprise,
    updateStatusEntreprise,
    inProgress,
  };
}
